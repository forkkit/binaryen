(module
 (func $f1 (result i32)
  (i32.const 1024)
 )
 (func $f2 (param i32) (result i64)
  (i64.const 42)
 )
 (table 2 2 funcref)
 (elem (i32.const 0) $f1 $f2)
)