
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol _0_com_zkty_jsi_globalstorage_DTO;
@class _0_com_zkty_jsi_globalstorage_DTO;

@interface _0_com_zkty_jsi_globalstorage_DTO: JSONModel
  	@property(nonatomic,copy) NSString* key;
   	@property(nonatomic,copy) NSString* val;
@end
    


@protocol xengine_jsi_globalstorage_protocol
       @required 
       - (NSString*) _get:(NSString*)dto;
    
      @required 
       - (void) _set:(_0_com_zkty_jsi_globalstorage_DTO*)dto;
    
      @required 
       - (NSString*) _del:(NSString*)dto;
    
@end
  


@interface xengine_jsi_globalstorage : JSIModule<xengine_jsi_globalstorage_protocol>
@end

