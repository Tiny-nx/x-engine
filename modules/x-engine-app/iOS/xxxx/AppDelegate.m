//
//  AppDelegate.m
//  iOS
//

#import "AppDelegate.h"
#import <XEngineContext.h>
#import "ZKTabBarViewController.h"
@interface AppDelegate ()

@end

@implementation AppDelegate
+ (void)load
{
    // 有意思, 像 java
    NSLog(@"hello ,world");
}

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [[XEngineContext sharedInstance] start];
    [[XEngineContext sharedInstance]  onApplicationDelegate:NSStringFromSelector(_cmd) arg1:application args:launchOptions];

    ZKTabBarViewController *tabVC = [[ZKTabBarViewController alloc]init];
    self.window.rootViewController = tabVC;
    
    return YES;
}
  
@end
