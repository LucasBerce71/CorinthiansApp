import { 
    DdSdkReactNative, 
    DdSdkReactNativeConfiguration 
} from '@datadog/mobile-react-native';

const SdkVerbosity = { WARN: null };

const config = new DdSdkReactNativeConfiguration(
    "<CLIENT_TOKEN>",
    "<ENVIRONMENT_NAME>",
    "<RUM_APPLICATION_ID>",
    true, // track User interactions (e.g.: Tap on buttons).
    true, // track XHR Resources
    true // track Errors
)
config.site = "US1"
// Optional: enable or disable native crash reports
config.nativeCrashReportEnabled = true
// Optional: sample RUM sessions (here, 80% of session will be sent to Datadog. Default = 100%)
config.sampleRate = 80
// Optional: set the reported service name (by default, it'll use the package name / bundleIdentifier of your Android / iOS app respectively)
config.serviceName = "com.example.reactnative"
// Optional: let the SDK print internal logs (above or equal to the provided level. Default = undefined (meaning no logs))
config.verbosity = SdkVerbosity.WARN

DdSdkReactNative.initialize(config)

// Once SDK is initialized you need to setup view tracking to be able to see data in the RUM Dashboard.