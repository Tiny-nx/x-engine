
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_device.h"


@implementation phoneDto
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    
  
@implementation DeviceDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   
   
   	return NO;
    }
@end
    




  @implementation xengine_jsi_device
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.device";
    }
    
  
  - (NSString*) getStatusBarHeight:(NSDictionary*) dict {
  return [self _getStatusBarHeight];
    }
  
  - (NSString*) getNavigationHeight:(NSDictionary*) dict {
  return [self _getNavigationHeight];
    }
  
  - (NSString*) getScreenHeight:(NSDictionary*) dict {
  return [self _getScreenHeight];
    }
  
  - (NSString*) getTabbarHeight:(NSDictionary*) dict {
  return [self _getTabbarHeight];
    }
  
  - (NSString*) callPhone:(NSDictionary*) dict {
      
          phoneDto* dto = [self convert:dict clazz:phoneDto.class];
      return [self _callPhone:dto];
        }
  
  - (NSString*) sendMessage:(NSDictionary*) dict {
      
          phoneDto* dto = [self convert:dict clazz:phoneDto.class];
      return [self _sendMessage:dto];
        }
    - (void) getDeviceInfo:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          [self _getDeviceInfo:^(DeviceDTO* result, BOOL complete) {
            completionHandler(result ,complete);
          }];
      }
  @end
