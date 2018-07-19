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

/**
 * retrieve the FormData headers in reliable way
 * @param formDataArg
 */
const getFormDataHeaders = (formDataArg: plugins.formData) => {
  const done = plugins.smartpromise.defer();
  formDataArg.getLength((err, length) => {
    if (err) {
      done.reject(err);
    }
    const headers = Object.assign(
      { "Content-Length": length },
      formDataArg.getHeaders()
    );
    done.resolve(headers);
  });
  return done.promise;
};

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
  const pipeLog: any = async (...args) => {
    console.log(args);
  };
  const requestOptions = Object.assign({}, optionsArg, { requestBody: form });

  // lets fire the actual request for sending the formdata
  const response = await request(urlArg, requestOptions);
  return response;
};
