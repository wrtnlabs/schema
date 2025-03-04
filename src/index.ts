import "@samchon/openapi";

declare module "@samchon/openapi" {
  export namespace OpenApi {
    export interface IOperation {
      /**
       * Icon URL.
       *
       * `x-wrtn-icon` is a property means an icon URL representing the target API.
       *
       * @format uri
       */
      "x-wrtn-icon"?: string;

      /**
       * Whether experimental or not.
       *
       * `x-wrtn-experimental` is a property means whether the target API is experimental
       * so that it can be revealed in the production environment or not. In other words,
       * if the property is `true`, the API is only available in the development environment.
       */
      "x-wrtn-experimental"?: boolean;

      /**
       * List of keywords selecting the operation for benchmarks.
       *
       * `x-wrtn-function-select-benchmarks` is a property which means a list of keywords
       * that may cause the LLM function calling selection to be benchmarked.
       */
      "x-wrtn-function-select-benchmarks"?: string[];
    }
  }

  export interface IJsonSchemaAttribute {
    /**
     * Placeholder value for frontend application.
     *
     * Placeholder means the value to be shown in the input field as a hint.
     * For example, when an email input field exists, the placeholder value
     * would be "Insert your email address here".
     */
    "x-wrtn-placeholder"?: string;
  }
  export namespace IJsonSchemaAttribute {
    export interface IInteger extends IPaymentNumericPlugin {}
    export interface INumber extends IPaymentNumericPlugin {}
    export interface IString {
      /**
       * Secret key for the schema.
       *
       * `x-wrtn-secret-key` is a property means a secret key that is required
       * for the target API endpoint calling. If the secret key is not filled,
       * the API call would be failed.
       */
      "x-wrtn-secret-key"?: string;

      /**
       * Secret scopes for the schema.
       *
       * `x-wrtn-secret-scopes` is a property means a list of secret scopes that
       * are required for the target API endpoint calling. If the secret scopes
       * are not satisfied, the API call would be failed.
       */
      "x-wrtn-secret-scopes"?: string[];

      /**
       * The currency of the payment should be paid.
       *
       * If an order appliance function be called and it returns a value with
       * `x-wrtn-payment-currency` property, the value means the currency of the
       * payment should be paid at the next publishing plan.
       *
       * The payment would be proceeded by the payment vendor service, and you
       * may fill the next payment function's parameter with the vendor service
       * code and UID of the payment transaction that is signified by the
       * `x-wrtn-payment-vendor` and `x-wrtn-payment-uid` typed properties.
       */
      "x-wrtn-payment-currency"?: true;

      /**
       * Code of the payment vendor service.
       *
       * When a payment function is called, its parameters may contain the
       * code of the payment vendor service that is represented by the
       * `x-wrtn-payment-vendor` typed property.
       *
       * If the target payment function's vendor service is "stripe", just fill
       * the `x-wrtn-payment-vendor` property with the string "stripe".
       * Otherwise, the vendor service code is "toss-payments", just fill the
       * `x-wrtn-payment-vendor` typed property with the string "toss-payments".
       *
       * The `x-wrtn-payment-vendor` property is used to identify the payment
       * vendor service and to check the payment status with the
       * {@link x-wrtn-payment-uid} typed property.
       */
      "x-wrtn-payment-vendor"?: true;

      /**
       * UID of the payment transaction.
       *
       * When a payment function is called, its parameters may contain the
       * UID of the payment transaction that is signified by the
       * `x-wrtn-payment-uid` typed property.
       *
       * The UID is a unique identifier of the payment transaction that is
       * proceeded by the payment vendor service. The UID is used to identify
       * the payment transaction and to check the payment status with the
       * {@link x-wrtn-payment-vendor} typed property.
       */
      "x-wrtn-payment-uid"?: true;

      /**
       * The payment target's order ID.
       *
       * If an order appliance function be called and it returns a value with
       * `x-wrtn-payment-target` property, the value means the identifier
       * of the payment target, as an order.
       *
       * When processing the publish, you have to fill the next payment
       * function's parameter with the target order's ID. Note that, this
       * `x-wrtn-payment-order-id` is different with the
       * {@link IVendor.x-wrtn-payment-uid}, which means the transaction ID
       * issued by the payment vendor service. In other words,
       * `x-wrtn-payment-order-id` is issued by the target API function.
       */
      "x-wrtn-payment-order-id"?: true;

      /**
       * The payment target's order name.
       *
       * If an order appliance function be called and it returns a value with
       * `x-wrtn-payment-order-name` property, the value means the name of the
       * payment target, as an order.
       *
       * When processing the publish, you have to fill the next payment
       * function's parameter with the target order's name.
       *
       * Note that, this `x-wrtn-payment-order-name` is different with the
       * {@link IVendor.x-wrtn-payment-citizen-name}. This is not the name
       * or citizen, but of the target order.
       */
      "x-wrtn-payment-order-name"?: true;

      /**
       * The citizen ID who've ordered the payment.
       *
       * If an order appliance function be called and it returns a value with
       * `x-wrtn-payment-citizen-id` property, the value means the citizen
       * ID who've ordered the payment.
       *
       * When processing the publish, you have to fill the next payment
       * function's parameter with the citizen ID who've ordered the payment.
       */
      "x-wrtn-payment-citizen-id"?: true;

      /**
       * The citizen name who've ordered the payment.
       *
       * If an order appliance function be called and it returns a value with
       * `x-wrtn-payment-citizen-name` property, the value means the citizen
       * name who've ordered the payment.
       *
       * When processing the publish, you have to fill the next payment
       * function's parameter with the citizen name who've ordered the payment.
       */
      "x-wrtn-payment-citizen-name"?: true;

      /**
       * The mobile phone number of the citizen who've ordered the payment.
       *
       * If an order appliance function be called and it returns a value with
       * `x-wrtn-payment-citizen-mobile` property, the value means the mobile
       * phone number of the citizen who've ordered the payment.
       *
       * When processing the publish, you have to fill the next payment
       * function's parameter with the mobile phone number of the citizen
       * who've ordered the payment.
       */
      "x-wrtn-payment-citizen-mobile"?: true;
    }
  }
}

interface IPaymentNumericPlugin {
  /**
   * The payment target.
   *
   * If an order appliance function be called and it returns a value with
   * `x-wrtn-payment-target` property, the value means the identifier
   * of the payment target, as an order.
   *
   * When processing the publish, you have to fill the next payment
   * function's parameter with the target order's ID. Note that, this
   * `x-wrtn-payment-order-id` is different with the
   * {@link IVendor.x-wrtn-payment-uid}, which means the transaction ID
   * issued by the payment vendor service. In other words,
   * `x-wrtn-payment-order-id` is issued by the target API function.
   */
  "x-wrtn-payment-order-id"?: true;

  /**
   * The citizen ID who've ordered the payment.
   *
   * If an order appliance function be called and it returns a value with
   * `x-wrtn-payment-citizen-id` property, the value means the citizen
   * ID who've ordered the payment.
   *
   * When processing the publish, you have to fill the next payment
   * function's parameter with the citizen ID who've ordered the payment.
   */
  "x-wrtn-payment-citizen-id"?: true;

  /**
   * The amount of the payment should be paid.
   *
   * If an order appliance function be called and it returns a value with
   * `x-wrtn-payment-amount` property, the value means the amount of the
   * payment should be paid at the next publishing plan.
   *
   * The payment would be proceeded by the payment vendor service, and you
   * may fill the next payment function's parameter with the vendor service
   * code and UID of the payment transaction that is signified by the
   * `x-wrtn-payment-vendor` and `x-wrtn-payment-uid` typed properties.
   */
  "x-wrtn-payment-amount"?: true;
}
