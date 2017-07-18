export const isNull = function(obj) {
	return Object.prototype.toString.call(obj) === '[object Null]'
}
