
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine__module_localstorage.h"
#import <micros.h>


@implementation StorageSetDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   
   	return NO;
    }
@end
    
  
@implementation StorageGetDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    
  
@implementation StorageRemoveDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    
  
@implementation StorageRemoveAllDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    
  
@implementation StorageStatusDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    




  @implementation xengine__module_localstorage
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.module.localstorage";
    }
    
    - (void) set:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          StorageSetDTO* dto = [self convert:dict clazz:StorageSetDTO.class];
          [self _set:dto complete:^(StorageStatusDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) get:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          StorageGetDTO* dto = [self convert:dict clazz:StorageGetDTO.class];
          [self _get:dto complete:^(StorageStatusDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) remove:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          StorageRemoveDTO* dto = [self convert:dict clazz:StorageRemoveDTO.class];
          [self _remove:dto complete:^(StorageStatusDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
    - (void) removeAll:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          StorageRemoveAllDTO* dto = [self convert:dict clazz:StorageRemoveAllDTO.class];
          [self _removeAll:dto complete:^(StorageStatusDTO* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
  @end
