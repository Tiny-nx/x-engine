
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import <xengine__module_BaseModule.h>
#import "JSONModel.h"

@protocol LopePIDDTO;
@protocol LopeScanDTO;
@protocol OpenDoorDTO;
@protocol LightLiftDTO;
@protocol LopeRetStatusDTO;

@interface LopePIDDTO: JSONModel
  	@property(nonatomic,copy) NSString* pid;
   	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface LopeScanDTO: JSONModel
  	@property(nonatomic,assign) NSInteger interval;
   	@property(nonatomic,strong) NSArray<NSString*>* serviceUUIDs;
   	@property(nonatomic,assign) BOOL immediately;
   	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface OpenDoorDTO: JSONModel
  	@property(nonatomic,strong) NSArray<NSDictionary<NSString*,NSString*>*>* locks;
   	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface LightLiftDTO: JSONModel
  	@property(nonatomic,copy) NSString* mac;
   	@property(nonatomic,assign) NSInteger ioIndex;
   	@property(nonatomic,strong) NSString* __event__;
@end
    

@interface LopeRetStatusDTO: JSONModel
  	@property(nonatomic,copy) NSString* status;
   	@property(nonatomic,copy) NSString* code;
@end
    


@protocol xengine__module_lope_protocol
       @required 
        - (void) _initSdkAndConfigure:(LopePIDDTO*) dto complete:(void (^)(LopeRetStatusDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _scanDevice:(LopeScanDTO*) dto complete:(void (^)(LopeRetStatusDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _openDoor:(OpenDoorDTO*) dto complete:(void (^)(LopeRetStatusDTO* result,BOOL complete)) completionHandler;

      @required 
        - (void) _lightLift:(LightLiftDTO*) dto complete:(void (^)(BOOL complete)) completionHandler;
    
@end
  


@interface xengine__module_lope : xengine__module_BaseModule<xengine__module_lope_protocol>
@end

