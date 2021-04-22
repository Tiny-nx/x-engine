
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_direct.h"


@implementation DirectPushDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	if ([propertyName isEqualToString:@"host"]) { return YES; }
   
   
   	if ([propertyName isEqualToString:@"query"]) { return YES; }
   	if ([propertyName isEqualToString:@"params"]) { return YES; }	return NO;
    }
@end
    
  
@implementation DirectBackDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    




  @implementation xengine_jsi_direct
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.direct";
    }
    
    - (void) push:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          dict=[self mergeDefault:dict defaultString:@"{  \"scheme\": \"omp\",  \"fragment\": \"/\",  \"params\": {    \"hideNavbar\": true  }}"];
    
          DirectPushDTO* dto = [self convert:dict clazz:DirectPushDTO.class];
          [self _push:dto complete:^(BOOL complete) {
             completionHandler(nil ,complete);
          }];
      }
    - (void) back:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          DirectBackDTO* dto = [self convert:dict clazz:DirectBackDTO.class];
          [self _back:dto complete:^(BOOL complete) {
             completionHandler(nil ,complete);
          }];
      }
  @end
