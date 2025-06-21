declare module '@stripe/stripe-js' {
  export function loadStripe(publishableKey: string): Promise<Stripe | null>;
  
  export interface Stripe {
    confirmCardPayment(clientSecret: string, options: any): Promise<any>;
    elements(): StripeElements;
  }
  
  export interface StripeElements {
    create(type: string, options?: any): StripeElement;
    getElement(type: any): StripeElement | null;
  }
  
  export interface StripeElement {
    mount(domElement: string | HTMLElement): void;
    unmount(): void;
    destroy(): void;
  }
}

declare module '@stripe/react-stripe-js' {
  import { ReactNode } from 'react';
  import { Stripe } from '@stripe/stripe-js';
  
  export interface ElementsProps {
    stripe: Promise<Stripe | null>;
    children: ReactNode;
  }
  
  export function Elements(props: ElementsProps): JSX.Element;
  
  export function useStripe(): Stripe | null;
  export function useElements(): any;
  
  export const CardElement: React.ComponentType<any>;
} 