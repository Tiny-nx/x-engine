
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_xxxx.h"


@implementation NamedDTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    
  
@implementation _0_com_zkty_jsi_xxxx_DTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {	return NO;
    }
@end
    




  @implementation xengine_jsi_xxxx
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.xxxx";
    }
    
  
  - (NSString*) syncMethod:(NSDictionary*) dict {

          dict=[self mergeDefault:dict defaultString:@"{  \"titleSize\": 16}"];
          NamedDTO* dto = [self convert:dict clazz:NamedDTO.class];
      return [self _syncMethod:dto];
        }
  
  - (NSString*) syncStringMethod:(NSDictionary*) dict {
      NSString* dto = [self convert:dict clazz:NSString.class];
      return [self _syncStringMethod:dto];
        }
  
  - (id) syncMethod1:(NSDictionary*) dict {
   [self _syncMethod1];
              return nil;
    }
    - (void) asyncMethod:(NSDictionary*) dict complete:(XEngineCallBack)completionHandler {

          dict=[self mergeDefault:dict defaultString:@"{  \"name\": \"default value\"}"];
    
          _0_com_zkty_jsi_xxxx_DTO* dto = [self convert:dict clazz:_0_com_zkty_jsi_xxxx_DTO.class];
          [self _asyncMethod:dto complete:^(NSString* result,  BOOL complete) {
            completionHandler(result,complete);
          }];
        
      }
  @end
