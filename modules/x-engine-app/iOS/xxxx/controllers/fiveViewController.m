//
//  fiveViewController.m
//  xxxx
//
//  Created by cwz on 2021/3/18.
//  Copyright © 2021 zk. All rights reserved.
//

#import "fiveViewController.h"
#import "XEOneWebViewControllerManage.h"

@interface fiveViewController ()

@end

@implementation fiveViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIViewController * vc= [[XEOneWebViewControllerManage sharedInstance] getWebViewControllerWithId:@"com.times.microapp.App4Min"];
    [self addChildViewController:vc];
    [self.view addSubview:vc.view];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
