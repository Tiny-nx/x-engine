
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "JSIModule.h"
#import "JSONModel.h"

@protocol DeviceSheetDTO;
@protocol DeviceMoreDTO;
@protocol DevicePhoneNumDTO;
@protocol DeviceMessageDTO;

@interface DeviceSheetDTO: JSONModel
  	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface DeviceMoreDTO: JSONModel
  	@property(nonatomic,copy) NSString* content;
@end
    

@interface DevicePhoneNumDTO: JSONModel
  	@property(nonatomic,copy) NSString* phoneNumber;
@end
    

@interface DeviceMessageDTO: JSONModel
  	@property(nonatomic,copy) NSString* phoneNumber;
   	@property(nonatomic,copy) NSString* messageContent;
@end
    


@protocol xengine__module_device_protocol
       @required 
        - (void) _getPhoneType:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getSystemVersion:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getUDID:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getBatteryLevel:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getPreferredLanguage:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getScreenWidth:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getScreenHeight:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getSafeAreaTop:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getSafeAreaBottom:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getSafeAreaLeft:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getSafeAreaRight:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getStatusHeight:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getNavigationHeight:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _getTabBarHeight:(DeviceSheetDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _devicePhoneCall:(DevicePhoneNumDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
      @required 
        - (void) _deviceSendMessage:(DeviceMessageDTO*) dto complete:(void (^)(DeviceMoreDTO* result,BOOL complete)) completionHandler;

@end
  


@interface xengine__module_device : JSIModule<xengine__module_device_protocol>
@end

