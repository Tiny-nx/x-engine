
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol NamedDTO;
@protocol _0_com_zkty_jsi_xxxx_DTO;

@interface NamedDTO: JSONModel
  	@property(nonatomic,copy) NSString* title;
   	@property(nonatomic,assign) NSInteger titleSize;
@end
    

@interface _0_com_zkty_jsi_xxxx_DTO: JSONModel
  	@property(nonatomic,copy) NSString* name;
@end
    


@protocol xengine_jsi_xxxx_protocol
       @required 
       - (NSString*) _syncMethod:(NamedDTO*)dto;
    
      @required 
       - (id) _syncMethod1;
    
      @required 
        - (void) _asyncMethod:(_0_com_zkty_jsi_xxxx_DTO*) dto complete:(void (^)(NSString* result,BOOL complete)) completionHandler;

@end
  


@interface xengine_jsi_xxxx : JSIModule<xengine_jsi_xxxx_protocol>
@end

