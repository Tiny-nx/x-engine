
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_camera.h"


@implementation _0_com_zkty_jsi_camera_DTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	if ([propertyName isEqualToString:@"allowsEditing"]) { return YES; }
   	if ([propertyName isEqualToString:@"savePhotosAlbum"]) { return YES; }
   	if ([propertyName isEqualToString:@"cameraFlashMode"]) { return YES; }
   	if ([propertyName isEqualToString:@"cameraDevice"]) { return YES; }
   
   
   	if ([propertyName isEqualToString:@"photoCount"]) { return YES; }	return NO;
    }
@end
    
  
@implementation _1_com_zkty_jsi_camera_DTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    




  @implementation xengine_jsi_camera
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.camera";
    }
    
    - (void) openImagePicker:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          _0_com_zkty_jsi_camera_DTO* dto = [self convert:dict clazz:_0_com_zkty_jsi_camera_DTO.class];
          [self _openImagePicker:dto complete:^(NSString* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) saveImageToPhotoAlbum:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          _1_com_zkty_jsi_camera_DTO* dto = [self convert:dict clazz:_1_com_zkty_jsi_camera_DTO.class];
          [self _saveImageToPhotoAlbum:dto complete:^(NSString* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
  @end