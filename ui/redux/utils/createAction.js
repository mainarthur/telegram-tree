/**
 * @typedef Action
 * @property {String} type
 * @property {A} [payload]
 * @template A
 */

/**
 *
 * @param {String} type
 * @returns
 */
const createAction = (type) => {
  /**
   *
   * @param {A} [payload]
   * @returns {Action<A>}
   * @template A
   */
  const action = (payload) => ({ type, payload });
  action.type = type;

  return action;
};

export default createAction;
