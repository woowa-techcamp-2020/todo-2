export const CLASS_NAME = {
  DP_NONE: 'dp-none',
  UNACTIVE: 'unactive',
  US_NONE: 'us-none',
  GRABBING: 'grabbing',
}

export const COLUMN_CLASS = {
  CONTAINER: 'column-container',
  COLUMN: 'column',
  TITLE: 'column-title',
  ADD_BTN: 'column-add-btn',
  REMOVE_BTN: 'column-remove-btn',
  CARD_COUNT: 'card-count',
  CARD_FORM_SLOT: 'card-form-slot',
  CONTENT_CONTAINER: 'content-container',
}

export const CARD_FORM_CLASS = {
  TEXTAREA: 'card-form-textarea',
  ADD_BTN: 'card-form-add-btn',
  CANCEL_BTN: 'card-form-cancel-btn',
}

export const CARD_CLASS = {
  CARD: 'card',
  TITLE: 'card-title',
  REMOVE_BTN: 'card-remove-btn',
  MOVING: 'moving',
  COPY: 'copy',
}

export const EVENT = {
  INSERT_CARD: 'insert-card',
  REMOVE_CARD: 'remove-card',
}

export const MODAL_ID = {
  EDIT_MODAL_BOX_COLUMN: 'editColumn',
  DELETE_MODAL_BOX_CARD: 'deleteCard',
  EDIT_MODAL_BOX_CARD: 'editCard',
  EDIT_CARD_BTN: 'editCardButton',
  EDIT_COLUMN_BTN: 'editColumndButton',
  DELETE_CARD_BTN: 'delete-card-button',
}

export const MODAL_CLASS = {
  MODAL: 'modal',
  CLOSE: 'close',
  BIGBOX: 'big-box',
  MODAL_CONTENT: 'modal-content',
}

export const SIDEBAR_CLASS = {
  MENU: 'menu',
  ACTIVITY: 'activity',
}

export const SIDEBAR_ID = {
  ACTIVITY_COLUMN: 'activity__column',
  ACTIVITY_CARD: 'activity__card',
  CONTENT: 'content',
  TIME: 'time',
}

export const TIME = {
  SECOND: 60,
  MINUTE_TO_SECOND: 3600,
  HOUR_TO_SECOND: 86400,
}

export const CARD_ACTIVITY_TEMPLATE = {
  MOVED: `<span class="highlight blue">@$username</span> $action<span class="highlight blue"> $card_title</span> from<span class="highlight black"> $from_column</span> to<span class="highlight black"> $to_column</span>`,
  ADDED: `<span class="highlight blue">@$username</span> $action<span class="highlight black"> $card_title</span> to<span class="highlight black"> $to_column</span>`,
  UPDATED: `<span class="highlight blue">@$username</span> $action<span class="highlight black"> $card_title</span>`,
  REMOVED: `<span class="highlight blue">@$username</span> $action<span class="highlight black"> $card_title</span>`,
}

export const COLUMN_ACTIVITY_TEMPLATE = {
  MOVED: `<span class="highlight blue">@$username</span> $action the column<span class="highlight black"> $column_title</span>`,
  ADDED: `<span class="highlight blue">@$username</span> $action the column<span class="highlight black"> $column_title</span>`,
  REMOVED: `<span class="highlight blue">@$username</span> $action the column<span class="highlight black"> $column_title</span>`,
  UPDATED: `<span class="highlight blue">@$username</span> $action the column<span class="highlight black"> $from_column_title</span> to<span class="highlight black"> $to_column_title</span>`,
}
