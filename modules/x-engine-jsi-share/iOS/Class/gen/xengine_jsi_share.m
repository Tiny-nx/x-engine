
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_share.h"


@implementation ShareDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   
   	return NO;
    }
@end
    
  
@implementation ShareTextDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    
  
@implementation ShareImgDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    
  
@implementation ShareLinkDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   
   	if ([propertyName isEqualToString:@"imgUrl"]) { return YES; }
   	return NO;
    }
@end
    
  
@implementation ShareMiniProgramDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   
   
   
   
   
   	return NO;
    }
@end
    




  @implementation xengine_jsi_share
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.share";
    }
    
    - (void) share:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          ShareDTO* dto = [self convert:dict clazz:ShareDTO.class];
          [self _share:dto complete:^(BOOL complete) {
             completionHandler(nil ,complete);
          }];
      }
  @end