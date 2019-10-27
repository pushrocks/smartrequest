import * as plugins from './smartrequest.plugins';
import * as interfaces from './smartrequest.interfaces';
import { request } from './smartrequest.request';

/**
 * the interfae for FormFieldData
 */
export interface IFormField {
  name: string;
  type: 'string' | 'filePath' | 'Buffer';
  payload: string | Buffer;
  fileName?: string;
}

const appendFormField = async (formDataArg: plugins.formData, formDataField: IFormField) => {
  switch (formDataField.type) {
    case 'string':
      formDataArg.append(formDataField.name, formDataField.payload);
      break;
    case 'filePath':
      if (typeof formDataField.payload !== 'string') {
        throw new Error(`Payload for key ${formDataField.name} must be of type string. Got ${typeof formDataField.payload} instead.`);
      }
      const fileData = plugins.fs.readFileSync(
        plugins.path.join(process.cwd(), formDataField.payload)
      );
      formDataArg.append('file', fileData, {
        filename: formDataField.fileName ? formDataField.fileName : 'upload.pdf',
        contentType: 'application/pdf'
      });
      break;
    case 'Buffer':
      formDataArg.append('file', formDataField.payload, {
        filename: formDataField.fileName ? formDataField.fileName : 'upload.pdf',
        contentType: 'application/pdf'
      });
      break;
  }
};

export const postFormData = async (
  urlArg: string,
  optionsArg: interfaces.ISmartRequestOptions = {},
  payloadArg: IFormField[]
) => {
  const form = new plugins.formData();
  for (const formField of payloadArg) {
    await appendFormField(form, formField);
  }
  const requestOptions = {
    ...optionsArg,
    method: 'POST',
    headers: {
      ...optionsArg.headers,
      ...form.getHeaders()
    },
    requestBody: form
  };

  // lets fire the actual request for sending the formdata
  const response = await request(urlArg, requestOptions);
  return response;
};
