import { useParams } from "react-router-dom";

/**
 * @typedef HomeParams
 * @property {String} [page]
 */

/**
 *
 * @returns {HomeParams}
 */
const useHomeParams = () => useParams();

export default useHomeParams;
