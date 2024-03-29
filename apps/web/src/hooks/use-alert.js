import { useReducer } from 'preact/hooks';
import { Text, Spinner } from '@blockcode/ui';

const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';

const initialState = {
  alerts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      if (state.alerts.find((alert) => alert.id === action.payload.id)) {
        return {
          alerts: state.alerts.map((alert) => {
            if (alert.id === action.payload.id) {
              return {
                ...alert,
                ...action.payload,
              };
            }
            return alert;
          }),
        };
      }
      return {
        alerts: [...state.alerts, action.payload],
      };
    case REMOVE_ALERT:
      return {
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };
    default:
      return state;
  }
};

const getAlertByName = (name, options = {}) => {
  let alert;
  switch (name) {
    case 'importing':
      alert = {
        icon: <Spinner level="success" />,
        message: (
          <Text
            id="gui.alert.importing"
            defaultMessage="importing..."
          />
        ),
      };
      break;
  }
  return Object.assign(alert, options);
};

export function useAlert() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...state,

    setAlert(...args) {
      let name, alert;
      let timeout = 0;
      for (const arg of args) {
        if (typeof arg === 'string') name = arg;
        if (typeof arg === 'object') alert = arg;
        if (typeof arg === 'number') timeout = arg;
      }
      if (name) {
        alert = getAlertByName(name, alert);
      }
      if (!alert) return;

      if (!alert.id) {
        alert.id = Date.now().toString(36);
      }
      dispatch({ type: SET_ALERT, payload: alert });

      if (timeout > 0) {
        setTimeout(() => {
          dispatch({ type: REMOVE_ALERT, payload: alert.id });
        }, timeout);
      }
    },

    removeAlert(id) {
      dispatch({ type: REMOVE_ALERT, payload: id });
    },
  };
}
