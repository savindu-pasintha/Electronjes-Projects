#include <node.h>
#include <string> 

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void getName(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate, "My name is savindu pasintha").ToLocalChecked());
}

void getSum(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  int sum;
  for(int x=0; x<100;x++){
   sum +=x;
  }

  
  args.GetReturnValue().Set(String::NewFromUtf8(
      isolate,"sum is 1000").ToLocalChecked());
}


// void InitializeName(Local<Object> exports) {
//   NODE_SET_METHOD(exports, "getName", getName);
// }
void InitializeSum(Local<Object> exports) {
  NODE_SET_METHOD(exports, "getSum", getSum);
}



//NODE_MODULE(addon,InitializeName)
NODE_MODULE(addon,InitializeSum)

}  // namespace demo