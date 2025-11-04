import { DeliveryMethod, type WebhookHandler } from "@shopify/shopify-api";

type PrivacyWebhooks = Record<string, WebhookHandler>;

const privacyWebhooks: PrivacyWebhooks = {
  /**
   * Customers can request their data from a store owner. When this happens,
   * Shopify invokes this privacy webhook.
   *
   * https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks#customers-data_request
   */
  CUSTOMERS_DATA_REQUEST: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic: string, shop: string, body: string, webhookId: string) => {
      const payload = JSON.parse(body) as {
        shop_id: number;
        shop_domain: string;
        orders_requested: number[];
        customer: {
          id: number;
          email: string;
          phone: string;
        };
        data_request: {
          id: number;
        };
      };

      // Handle customer data request here
      console.log("CUSTOMERS_DATA_REQUEST received for:", shop, payload);
    },
  },

  /**
   * Store owners can request that data is deleted on behalf of a customer. When
   * this happens, Shopify invokes this privacy webhook.
   *
   * https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks#customers-redact
   */
  CUSTOMERS_REDACT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic: string, shop: string, body: string, webhookId: string) => {
      const payload = JSON.parse(body) as {
        shop_id: number;
        shop_domain: string;
        customer: {
          id: number;
          email: string;
          phone: string;
        };
        orders_to_redact: number[];
      };

      // Handle customer redaction here
      console.log("CUSTOMERS_REDACT received for:", shop, payload);
    },
  },

  /**
   * 48 hours after a store owner uninstalls your app, Shopify invokes this
   * privacy webhook.
   *
   * https://shopify.dev/docs/apps/webhooks/configuration/mandatory-webhooks#shop-redact
   */
  SHOP_REDACT: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: "/api/webhooks",
    callback: async (topic: string, shop: string, body: string, webhookId: string) => {
      const payload = JSON.parse(body) as {
        shop_id: number;
        shop_domain: string;
      };

      // Handle shop redaction here
      console.log("SHOP_REDACT received for:", shop, payload);
    },
  },
};

export default privacyWebhooks;
