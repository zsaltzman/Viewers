import { Meteor } from "meteor/meteor";
import { OHIF } from 'meteor/ohif:core';

async function makeRequest(geturl, options) {
    const parsed = new URL(geturl);
    const jsonHeaders = ['application/json', 'application/dicom+json'];

    let requestOpt = {
        method: 'GET'
    };

    // TODO: Clean this up
    const accessToken = Meteor.user().services.keycloak.accessToken;
    if (accessToken) {
        requestOpt.headers = {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
        };
    }

    if (options.headers) {
        Object.keys(options.headers).forEach(key => {
            requestOpt.headers[key] = options.headers[key];
        });
    }

    return new Promise((resolve, reject) => {
        fetch(parsed.href, requestOpt).then((response) => {
            if (response.status === 400) {
                reject(new Error(400));
            }

            // TODO: handle errors with 400+ code
            const contentType = (response.headers['content-type'] || '').split(';')[0];
            if (jsonHeaders.indexOf(contentType) === -1) {
                const errorMessage = `We only support json but "${contentType}" was sent by the server`;
                reject(new Error(errorMessage));
                return;
            }

            resolve(response.json());

        }, (error) => {
            OHIF.log.error('There was an error in the DICOMWeb Server');

            reject(new Error(error));
        });
    });
}

export default makeRequest;
