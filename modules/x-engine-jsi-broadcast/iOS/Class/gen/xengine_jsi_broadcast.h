
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol NamedDTO;
@protocol _0_com_zkty_jsi_broadcast_DTO;
@class NamedDTO;
@class _0_com_zkty_jsi_broadcast_DTO;

@interface NamedDTO: JSONModel
  	@property(nonatomic,copy) NSString* title;
   	@property(nonatomic,assign) NSInteger titleSize;
@end
    

@interface _0_com_zkty_jsi_broadcast_DTO: JSONModel
  	@property(nonatomic,copy) NSString* type;
   	@property(nonatomic,copy) NSString* payload;
@end
    


@protocol xengine_jsi_broadcast_protocol
       @required 
       - (void) _triggerBroadcast:(_0_com_zkty_jsi_broadcast_DTO*)dto;
    
@end
  


@interface xengine_jsi_broadcast : JSIModule<xengine_jsi_broadcast_protocol>
@end

