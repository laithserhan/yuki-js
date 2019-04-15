const Bool = ( value: any = 0 ): YukiNumber => {
  value = value ? 1 : 0

  return {
    get _bitLength() {
      return 1
    },
    get $() {
      return value
    },
    set $( n ) {
      value = n ? 1 : 0
    }
  }
}

const BoolArray = ( length: number ): YukiArray => {
  const values = Array<any>( length )
  const arr: YukiArray = {
    get _bitLength() {
      return length
    },
    get length() {
      return length
    }
  }

  for ( let i = 0; i < length; i++ ) {
    values[ i ] = Bool()

    Object.defineProperty( arr, i, {
      get() {
        return values[ i ].$
      },
      set( v ) {
        values[ i ].$ = v
      }
    } )
  }

  return arr
}

const IntFactory = ( bitLength: number ) => {
  const Int = ( value = 0 ): YukiNumber => {
    value = ensureSigned( value, bitLength )

    return {
      get _bitLength() {
        return bitLength
      },
      get $() {
        return value
      },
      set $( n ) {
        value = ensureSigned( n, bitLength )
      }
    }
  }

  return Int
}

const ensureSigned = ( value: any, bitLength: number ) => {
  const maxUint = maxValue( bitLength )
  const maxInt = Math.floor( maxUint / 2 - 1 )
  const minInt = Math.floor( maxUint / 2 ) * -1

  if ( value && typeof value !== 'number' && '$' in value ) value = value.$

  assertNumber( value )

  value = ~~value

  while ( value < minInt ) {
    value += maxUint
  }

  while ( value > maxInt ) {
    value -= maxUint
  }

  return value
}

const UintFactory = ( bitLength: number ) => {
  const Uint = ( value = 0 ): YukiNumber => {
    value = ensureUnsigned( value, bitLength )

    return {
      get _bitLength() {
        return bitLength
      },
      get $() {
        return value
      },
      set $( n ) {
        value = ensureUnsigned( n, bitLength )
      }
    }
  }

  return Uint
}

const ensureUnsigned = ( value: any, bitLength: number ) => {
  const maxUint = maxValue( bitLength )

  if ( value && typeof value !== 'number' && '$' in value ) value = value.$

  assertNumber( value )

  value = ~~value

  while ( value >= maxUint ) {
    value -= maxUint
  }

  while ( value < 0 ) {
    value += maxUint
  }

  return value
}

const IntArrayFactory = ( bitLength: number ) => {
  const Int = IntFactory( bitLength )

  const IntArray = ( length: number ) => {
    const values = Array<any>( length )
    const arr: YukiArray = {
      get _bitLength() {
        return bitLength * length
      },
      get length() {
        return length
      }
    }

    for ( let i = 0; i < length; i++ ) {
      values[ i ] = Int()

      Object.defineProperty( arr, i, {
        get() {
          return values[ i ].$
        },
        set( v ) {
          values[ i ].$ = v
        }
      } )
    }

    return arr
  }

  return IntArray
}

const UintArrayFactory = ( bitLength: number ) => {
  const Uint = UintFactory( bitLength )

  const UintArray = ( length: number ) => {
    const values = Array<any>( length )
    const arr: YukiArray = {
      get _bitLength() {
        return bitLength * length
      },
      get length() {
        return length
      }
    }

    for ( let i = 0; i < length; i++ ) {
      values[ i ] = Uint()

      Object.defineProperty( arr, i, {
        get() {
          return values[ i ].$
        },
        set( v ) {
          values[ i ].$ = v
        }
      } )
    }

    return arr
  }

  return UintArray
}

const assertNumber = ( value: any ) => {
  if ( typeof value === 'boolean' ) return

  if (
    typeof value !== 'number' ||
    isNaN( value ) ||
    !isFinite( value )
  ) {
    throw Error( 'Expected a number' )
  }
}

const maxValue = ( bitLength: number ) =>
  Math.pow( 2, bitLength )

interface YukiArray {
  readonly _bitLength: number
  readonly length: number
  [ n: number ]: number
}

interface YukiNumber {
  readonly _bitLength: number
  $: number
}

type YukiType = YukiArray | YukiNumber
