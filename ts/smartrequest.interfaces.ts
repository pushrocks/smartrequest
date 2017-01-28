import * as plugins from './smartrequest.plugins'
import * as https from 'https'

export interface SmartRequestOptions extends https.RequestOptions {
    requestBody?: any
}