
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_geo.h"


@implementation LocationDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   
   
   
   
   
   
   	return NO;
    }
@end
    




  @implementation xengine_jsi_geo
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.geo";
    }
    
    - (void) locate:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          [self _locate:^(LocationDTO* result, BOOL complete) {
            completionHandler(result ,complete);
          }];
      }
  @end
