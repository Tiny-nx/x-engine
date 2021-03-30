//
//  Native_direct.m
//  direct
//
//  Created by zk on 2020/9/7.
//  Copyright © 2020 edz. All rights reserved.


#import "Native_direct.h"
#import "NativeContext.h"
#import "iDirectManager.h"
#import "iDirect.h"
@interface Native_direct()
@property (nonatomic, strong) NSMutableDictionary<NSString*, id<iDirect>> * directors;
@end

@implementation Native_direct
NATIVE_MODULE(Native_direct)

 - (NSString*) moduleId{
    return @"com.zkty.native.direct";
}

- (int) order{
    return 0;
}

- (instancetype)init
{
    self = [super init];
    self.directors=[NSMutableDictionary new];
    return self;
}

- (void)afterAllNativeModuleInited{
   NSArray* modules= [[NativeContext sharedInstance]  getModulesByProtocol:@protocol(iDirect)];
    for(id<iDirect> direct in modules){
        [self.directors setObject:direct forKey:[direct scheme]];
    }
}

- (void)back: (NSString*) scheme host:(NSString*) host pathname:(NSString*) pathname{
    id<iDirect> direct = [self.directors objectForKey:scheme];
    [direct back:host pathname:pathname];
}

- (void)push: (NSString*) scheme
        host:(nullable NSString*) host
        pathname:(NSString*) pathname
        query:(nullable NSDictionary<NSString*,NSString*>*) query
        params:(NSDictionary<NSString*,NSString*>*) params {
    id<iDirect> direct = [self.directors objectForKey:scheme];
    [direct push:[direct protocol] host:host pathname:pathname query:query params:params];
}

@end
 
