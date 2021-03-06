
function asmFunc(global, env) {
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 function even(n) {
  n = n | 0;
  var $10 = 0;
  if ((n | 0) == (0 | 0)) {
   $10 = 1
  } else {
   $10 = odd(n - 1 | 0 | 0) | 0
  }
  return $10 | 0;
 }
 
 function odd(n) {
  n = n | 0;
  var $10 = 0;
  if ((n | 0) == (0 | 0)) {
   $10 = 0
  } else {
   $10 = even(n - 1 | 0 | 0) | 0
  }
  return $10 | 0;
 }
 
 return {
  "even": even, 
  "odd": odd
 };
}

var retasmFunc = asmFunc({
    Math,
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    NaN,
    Infinity
  }, {
    abort: function() { throw new Error('abort'); }
  });
export var even = retasmFunc.even;
export var odd = retasmFunc.odd;
