import * as plugins from "./smartrequest.plugins";
import * as interfaces from "./smartrequest.interfaces";
import { request } from "./smartrequest.request";

/**
 * the interfae for FormFieldData
 */
export interface IFormField {
  name: string;
  type: "string" | "filePath" | "Buffer";
  payload: string;
}

const appendFormField = async (
  formDataArg: plugins.formData,
  formDataField: IFormField
) => {
  if (formDataField.type === "filePath") {
    let fileData = plugins.fs.readFileSync(
      plugins.path.join(process.cwd(), formDataField.payload)
    );
    formDataArg.append("file", fileData, {
      filename: 'upload.pdf',
      contentType: 'application/pdf'
    });
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
  const requestOptions = Object.assign({}, optionsArg, {
    headers: {
      ...(optionsArg.headers),
      ...form.getHeaders()
    },
    requestBody: form
  });

  // lets fire the actual request for sending the formdata
  const response = await request(urlArg, requestOptions);
  return response;
};
