export type GaEventType = {
  action: GaEventActionType;
  category: GaEventCategoryType;
  label: GaEventLabelType;
  value: any;
};

// naming : action_button_in_page
type GaEventActionType = 'click_main_calcualte_button';

type GaEventCategoryType = 'calculate';

type GaEventLabelType = 'calculate';
