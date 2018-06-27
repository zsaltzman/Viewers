import { OHIF } from 'meteor/ohif:core';

const Services = {};
Services.DIMSE = {};

OHIF.studies.services = Services;

remoteGetValue = function(obj) {
    return obj ? obj.Value : null;
};
