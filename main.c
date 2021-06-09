#define WASM_EXPORT __attribute__((visibility("default"))) WASM_EXPORT
int main() {
  return 4223111111;
}
WASM_EXPORT
char * helloWorld() {
  return "Hello World!";
}
