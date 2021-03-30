//
//  Native_direct_microapp.m
//  ModuleApp
//
//  Created by zk on 2021/3/23.
//  Copyright © 2021 zkty-team. All rights reserved.
//

#import "Native_direct_microapp.h"
#import "NativeContext.h"
#import "MicroAppLoader.h"
#import "XEOneWebViewPool.h"
#import "XEOneWebViewPoolModel.h"
#import "Unity.h"
#import "RecyleWebViewController.h"
#import "GlobalState.h"

@interface Native_direct_microapp ()
@property (nonatomic, strong) id<iDirect>  microappDirect;
@end
@implementation Native_direct_microapp
NATIVE_MODULE(Native_direct_microapp)

- (NSString*) moduleId{
    return @"com.zkty.native.direct_microapp";
}

- (int) order{
    return 0;
}
- (nonnull NSString *)protocol {
    return @"file:";
}
-(NSString*) scheme{
    return @"microapp";
}

- (void)afterAllNativeModuleInited{
   NSArray* modules= [[NativeContext sharedInstance]  getModulesByProtocol:@protocol(iDirect)];
    for(id<iDirect> direct in modules){
        // 暂时 与 omp 使用相同的逻辑
        if([[direct scheme] isEqualToString:@"omp"]){
            self.microappDirect = direct;
            return;
        }
    }
}

- (void)back:(NSString*) host pathname:(NSString*) pathname{
    [self.microappDirect back:host pathname:pathname];
}

- (void)push:(NSString*) protocol  // 强制 protocol，非必须
        host:(NSString*) host
        pathname:(NSString*) pathname
        query:(NSDictionary<NSString*,id>*) query
        params:(NSDictionary<NSString*,id>*) params  {
    NSString *localhost = [[MicroAppLoader sharedInstance] getMicroAppHost:host withVersion:0];
    [self.microappDirect push:[self protocol] host:localhost pathname:pathname query:query params:params];
}

@end
