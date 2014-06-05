module types/pop-types/Arithmetic

imports
	include/JasminXT
	analysis/names/extra-constructors

type rules
	BIPUSH(_) +
	SIPUSH(_) +
	
	ICONST_M1() +
	ICONST_0() + 
	ICONST_1() + 
	ICONST_2() + 
	ICONST_3() + 
	ICONST_4() + 
	ICONST_5() +
	
	LCONST_0() + 
	LCONST_1() +
 
	FCONST_0() + 
	FCONST_1() + 
	FCONST_2() + 
 
	DCONST_0() + 
	DCONST_1() +
	
	ACONST_NULL() +
	LDC(_) +
	LDC2_W(_) +
	LDC_W(_) +
	
	ILOAD(_) +
	LLOAD(_) +
	FLOAD(_) +
	DLOAD(_) +
	ALOAD(_) +
	
	ILOAD_0() +
    
	ISTORE(_) has pop-type [Int()]
	LSTORE(_) has pop-type [Long()]
	FSTORE(_) has pop-type [Float()]
	DSTORE(_) has pop-type [Double()]
	// ASTORE(_) has pop-type [Object()]
	
	ISTORE_W(_) has pop-type [Int()]   
	LSTORE_W(_) has pop-type [Long()]  
	FSTORE_W(_) has pop-type [Float()] 
	DSTORE_W(_) has pop-type [Double()]
	// ASTORE_W(_) has pop-type [Object()]
	        
	ISTORE_0() +
	ISTORE_1() +
	ISTORE_2() +
	ISTORE_3() has pop-type [Int()]
	        
	// ASTORE_0() +
	// ASTORE_1() +
	// ASTORE_2() +
	// ASTORE_3() has pop-type [Object()]
	        
	LSTORE_0() +
	LSTORE_1() +
	LSTORE_2() +
	LSTORE_3() has pop-type [Long()]
	        
	FSTORE_0() +
	FSTORE_1() +
	FSTORE_2() +
	FSTORE_3() has pop-type [Float()]
	        
	DSTORE_0() +
	DSTORE_1() +
	DSTORE_2() +
	DSTORE_3() has pop-type [Double()]