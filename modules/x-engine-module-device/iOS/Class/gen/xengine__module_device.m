
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine__module_device.h"
#import <micros.h>


@implementation DeviceSheetDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    
  
@implementation DeviceMoreDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    
  
@implementation DevicePhoneNumDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    
  
@implementation DeviceMessageDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    




  @implementation xengine__module_device
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.module.device";
    }
    
    - (void) getPhoneType:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getPhoneType:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getSystemVersion:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getSystemVersion:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getUDID:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getUDID:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getBatteryLevel:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getBatteryLevel:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getPreferredLanguage:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getPreferredLanguage:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getScreenWidth:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getScreenWidth:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getScreenHeight:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getScreenHeight:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getSafeAreaTop:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getSafeAreaTop:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getSafeAreaBottom:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getSafeAreaBottom:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getSafeAreaLeft:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getSafeAreaLeft:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getSafeAreaRight:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getSafeAreaRight:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getStatusHeight:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getStatusHeight:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getNavigationHeight:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getNavigationHeight:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) getTabBarHeight:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceSheetDTO* dto = [self convert:dict clazz:DeviceSheetDTO.class];
          [self _getTabBarHeight:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) devicePhoneCall:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DevicePhoneNumDTO* dto = [self convert:dict clazz:DevicePhoneNumDTO.class];
          [self _devicePhoneCall:dto complete:^(BOOL complete) {
             completionHandler(nil ,complete);
          }];
      }
    - (void) deviceSendMessage:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DeviceMessageDTO* dto = [self convert:dict clazz:DeviceMessageDTO.class];
          [self _deviceSendMessage:dto complete:^(DeviceMoreDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
  @end
