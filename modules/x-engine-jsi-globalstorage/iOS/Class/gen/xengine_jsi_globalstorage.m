
// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


#import "xengine_jsi_globalstorage.h"


@implementation _0_com_zkty_jsi_globalstorage_DTO
    + (BOOL)propertyIsOptional:(NSString *)propertyName {
   	return NO;
    }
@end
    




  @implementation xengine_jsi_globalstorage
    - (instancetype)init
    {
        self = [super init];
        return self;
    }

    - (NSString *)moduleId{
        return @"com.zkty.jsi.globalstorage";
    }
    
  
  - (NSString*) get:(NSDictionary*) dict {
      NSString* dto = [self convert:dict clazz:NSString.class];
      return [self _get:dto];
        }
  
  - (id) set:(NSDictionary*) dict {
      _0_com_zkty_jsi_globalstorage_DTO* dto = [self convert:dict clazz:_0_com_zkty_jsi_globalstorage_DTO.class];
      [self _set:dto];
                 return nil;
        }
  
  - (id) del:(NSDictionary*) dict {
      NSString* dto = [self convert:dict clazz:NSString.class];
      [self _del:dto];
                 return nil;
        }
  @end