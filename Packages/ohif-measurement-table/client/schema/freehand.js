import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { MeasurementSchemaTypes } from 'meteor/ohif:measurements/both/schema/measurements';

const CornerstoneHandleSchema = MeasurementSchemaTypes.CornerstoneHandleSchema;

const MeanStdDevSchema = new SimpleSchema({
    count: {
        type: Number,
        label: 'count'
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

const pointSchema = new SimpleSchema({
    x: {
        type: Number,
        decimal: true,
        optional: true
    },
    y: {
        type: Number,
        decimal: true,
        optional: true
    }
});

const FreehandHandleData = new SimpleSchema([MeasurementSchemaTypes.CornerstoneHandleSchema, {
    lines: {
        type: [pointSchema],
        optional: true
    }
}]);

const toolSchema = new SimpleSchema([MeasurementSchemaTypes.CornerstoneToolMeasurement, {
    handles: {
        type: Array,
        label: 'Handles'
    },
    'handles.$': {
        type: FreehandHandleData,
        label: 'FreehandHandleData'
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

const treatData = data => {
    data.handles = deepClone(data.handles);
    data.handles.forEach( handle => {
        handle.lines = deepClone(handle.lines);
    });
};

const deepClone = array => {
    const handles = [];
    array.forEach( obj => {
        const handle = {};
        Object.keys(obj).forEach( index => {
            handle[index] = obj[index];
        });
        handles.push(handle);
    });

    return handles;
};

export default {
    id: 'freehand',
    name: 'Freehand',
    toolGroup: 'allTools',
    cornerstoneToolType: 'freehand',
    schema: toolSchema,
    options: {
        measurementTable: {
            displayFunction,
            treatData
        }
    }
};
