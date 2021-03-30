#
#  Be sure to run `pod spec lint JsApiTest.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see https://guides.cocoapods.org/syntax/podspec.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#
require "json"
package = JSON.parse(File.read(File.join(__dir__, "package.json")))
version = package['version']

Pod::Spec.new do |s|


    s.name         = "x-engine-native-core"
    s.version      = version
    s.summary      = package["description"]

    s.description  = <<-DESC
            description
                     DESC

    s.homepage     = "https://github.com/zkty-team/x-engine-module-docs"
   
    s.license = 'MIT'

    s.requires_arc = true

    s.author             = { "zkty-team" => "liuzq7@gmail.com" }

    s.platform     = :ios, "10.0"
    s.ios.deployment_target = "10.0"
  
    s.source      = { :git => 'https://github.com/zkty-team/x-engine-native-core.git',
  :tag => s.version.to_s }
  
  
    s.source_files  = "iOS/Class/**/*.{h,m}","iOS/Class/gen/**/*.{h,m,png}"
    s.public_header_files = "iOS/Class/**/*.h","iOS/Class/gen/**/*.h"
    s.resources = ["iOS/Class/back_arrow.png", "iOS/Class/close_black.png"]
  
    s.frameworks  = "CoreServices"
  
    s.pod_target_xcconfig = {'CLANG_ALLOW_NON_MODULAR_INCLUDES_IN_FRAMEWORK_MODULES' => 'YES'}
    s.dependency 'x-engine-native-protocols'
  
end
  
