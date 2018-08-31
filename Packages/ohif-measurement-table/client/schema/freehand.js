import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurements/both/schema/measurements';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const MeanStdDevSchema = new SimpleSchema({
    count: {
        type: Number,
        label: 'count',
        decimal: true
    },
    mean: {
        type: Number,
        label: 'mean',
        decimal: true
    },
    stdDev: {
        type: Number,
        label: 'stdDev',
        decimal: true
    },
    variance: {
        type: Number,
        label: 'variance',
        decimal: true
    }
});

const toolSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: Array,
        label: 'Handles'
    },
    'handles.$': {
        type: CornerstoneHandleSchema,
        label: 'Handles'
    },
    textBox: {
        type: CornerstoneHandleSchema,
        label: 'Text Box'
    },
    measurementNumber: {
        type: Number,
        label: 'Measurement Number'
    },
    location: {
        type: String,
        label: 'Location',
        optional: true
    },
    description: {
        type: String,
        label: 'Description',
        optional: true
    },
    toolType: {
        type: String,
        label: 'Measurement Tool Type',
        defaultValue: 'freehand'
    },
    area: {
        type: Number,
        label: 'Area',
        decimal: true,
        optional: true
    },
    meanStdDev: {
        type: MeanStdDevSchema,
        label: 'MeanStd Values',
        optional: true
    }
}]);

const displayFunction = data => {
    let meanValue = '';
    if (data.meanStdDev && data.meanStdDev.mean) {
        meanValue = data.meanStdDev.mean.toFixed(2) + ' HU';
    }
    return meanValue;
};

export default {
    id: 'freehand',
    name: 'Freehand',
    toolGroup: 'allTools',
    cornerstoneToolType: 'freehand',
    schema: toolSchema,
    options: {
        measurementTable: {
            displayFunction
        }
    }
};
