const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
};

const definitions = [
  {
    id: 'Crosshairs',
    label: 'Crosshairs',
    icon: 'crosshairs',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'enableCrosshairsTool',
    commandOptions: {},
  },
  {
    id: 'WWWC',
    label: 'WWWC',
    icon: 'level',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'enableLevelTool',
    commandOptions: {},
  },
  {
    id: 'Rotate',
    label: 'Rotate',
    icon: '3d-rotate',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'enableRotateTool',
    commandOptions: {},
  },
  {
    id: 'blendOperation',
    label: 'Slab Operation',
    dropdown: true,

    commandOptions: {},
    align: 'center',
    list: [
      {
        title: 'None',
        commandName: 'enableCompositeBlend'
      },
      {
        title: 'MIP',
        commandName: 'enableMIP'
      },
      {
        title: 'MinIP',
        commandName: 'enableMIP'
      },
      {
        title: 'AverageIP',
        commandName: 'enableAverageIP'
      }
    ]
  },
  {
    id: 'slabThickness',
    label: 'Slab Thickness',
    dropdown: true,

    commandOptions: {},
    align: 'center',
    list: [
      {
        title: 'None',
        commandName: 'enableCompositeBlend'
      },
      {
        title: '5',
        commandName: 'setSlabWidthTo5'
      },
      {
        title: '25',
        commandName: 'setSlabWidthTo25'
      },
      {
        title: '50',
        commandName: 'setSlabWidthTo50'
      }
    ]
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::VTK',
};
