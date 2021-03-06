//
//  NSBundle+ZKTY_TZImagePicker.m
//  ZKTY_TZImagePickerController
//
//  Created by 谭真 on 16/08/18.
//  Copyright © 2016年 谭真. All rights reserved.
//

#import "ZKTY_NSBundle+TZImagePicker.h"
#import "ZKTY_TZImagePickerController.h"

@implementation NSBundle (ZKTY_TZImagePicker)

+ (NSBundle *)tz_imagePickerBundle {
#ifdef SWIFT_PACKAGE
    NSBundle *bundle = SWIFTPM_MODULE_BUNDLE;
#else
    NSBundle *bundle = [NSBundle bundleForClass:[ZKTY_TZImagePickerController class]];
#endif
    NSURL *url = [bundle URLForResource:@"TZImagePickerController" withExtension:@"bundle"];
    bundle = [NSBundle bundleWithURL:url];
    return bundle;
}

+ (NSString *)tz_localizedStringForKey:(NSString *)key {
    return [self tz_localizedStringForKey:key value:@""];
}

+ (NSString *)tz_localizedStringForKey:(NSString *)key value:(NSString *)value {
    NSBundle *bundle = [ZKTY_TZImagePickerConfig sharedInstance].languageBundle;
    NSString *value1 = [bundle localizedStringForKey:key value:value table:nil];
    return value1;
}

@end
