import { convertMeasurementsToSR } from './convertMeasurementsToSR';
import { convertSRToMeasurements } from './convertSRToMeasurements';
import {
    getAllSRSeries,
    getLatestSRSeries,
    multipartEncode,
    getSTOWUrl
} from './srUtilities';
import {Meteor} from "meteor/meteor";

const retrieveMeasurementFromSR = (srSeries) => {
    const instance = srSeries.getFirstInstance();

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.responseType = 'arraybuffer';
        request.open('GET', instance.getDataProperty('wadouri'));

        if (Meteor.user().services.keycloak) {
            const accessToken = Meteor.user().services.keycloak.accessToken;
            request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
        }

        request.onload = function (progressEvent) {
            const measurements = convertSRToMeasurements(progressEvent.currentTarget.response);

            resolve(measurements);
        };

        request.onerror = function(error) {
            reject(error);
        };

        request.send();
    });
};

const stowSRFromMeasurements = (measurements) => {
    const stowURL = getSTOWUrl();
    const reportDataset = convertMeasurementsToSR(measurements);
    const boundary = dcmjs.data.DicomMetaDictionary.uid();
    const multipartBuffer = multipartEncode(reportDataset, boundary);

    console.log(reportDataset);

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("POST", stowURL);
        request.onload = (resp) => {
            console.log('STOWSR resp: ', resp);
            resolve();
        };

        request.onerror = (error) => {
            console.log('STOWSR error: ', error);
            reject();
        };

        request.setRequestHeader(
            'Content-Type',
            `multipart/related; type=application/dicom; boundary=${boundary}`
        );

        if (Meteor.user().services.keycloak) {
            const accessToken = Meteor.user().services.keycloak.accessToken;

            request.setRequestHeader("Authorization", `Bearer ${accessToken}`);
        }

        request.send(multipartBuffer);
    });
};

export {
    convertMeasurementsToSR,
    convertSRToMeasurements,
    getAllSRSeries,
    getLatestSRSeries,
    retrieveMeasurementFromSR,
    stowSRFromMeasurements
}
