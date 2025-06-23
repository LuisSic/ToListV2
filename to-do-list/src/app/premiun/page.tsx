"use client";
import React from "react";
import Button from "../../components/Button/Button";
import Image from "next/image";

// Approach 1: Using Omit to exclude fixed props
type IconProps = Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export const Teams: React.FC<IconProps> = (props) => {
  return (
    <Image
      src="/pricing/undraw_miro_qvwm.svg"
      alt="Teams"
      {...props}
      width={700}
      height={700}
    />
  );
};

export const Checkmark: React.FC<IconProps> = (props) => {
  return (
    <Image
      src="/features/checkmark-circle-outline.svg"
      alt="Checkmark"
      {...props}
      width={15}
      height={15}
    />
  );
};

export const Update: React.FC<IconProps> = (props) => {
  return (
    <Image
      src="/pricing/undraw_update_uxn2.svg"
      alt="Update"
      {...props}
      width={700}
      height={700}
    />
  );
};

export const Free: React.FC<IconProps> = (props) => {
  return (
    <Image
      src="/pricing/undraw_order_confirmed_aaw7.svg"
      alt="Free"
      {...props}
      width={700}
      height={700}
    />
  );
};

const Pricing: React.FC = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing__head">
          <h1 className="heading-1">Find the plan that&apos;s right for you</h1>
        </div>
        <div className="pricing__body">
          <div className="plan plan--1">
            <Free className="plan__svg" />
            <h3 className="heading-3">Free</h3>
            <p>For Starters</p>
            <h1 className="heading-1">$0</h1>
            <Button
              className="btn plan--btn"
              text="Get Started"
              callback={() => console.log("click")}
            />

            <div className="plan__features">
              <h3 className="heading-3">Top Feature</h3>
              <ul className="plan__list">
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 80 projects
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 5 people per project
                </li>
              </ul>
            </div>
          </div>
          <div className="plan plan--2">
            <Update className="plan__svg" />
            <h3 className="heading-3">Premium</h3>
            <p>For Pros</p>
            <h1 className="heading-1">$3</h1>
            <Button
              className="btn plan--btn"
              text="Upgrade Now"
              callback={() => console.log("click")}
            />

            <div className="plan__features">
              <h3 className="heading-3">Top Feature</h3>
              <ul className="plan__list">
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 300 projects
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Up to 25 people per project
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Reminders
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Comments & file uploads
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Labels & filters
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Productivity trends
                </li>
              </ul>
            </div>
          </div>
          <div className="plan plan--3">
            <Teams className="plan__svg" />
            <h3 className="heading-3">Business</h3>
            <p>For Teams</p>
            <h1 className="heading-1">$5</h1>
            <Button
              className="btn plan--btn"
              text="Try For Free"
              callback={() => console.log("click")}
            />

            <div className="plan__features">
              <h3 className="heading-3">Top Feature</h3>
              <ul className="plan__list">
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  500 projects per user
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  50 people per project
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Team inbox
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Admin & member roles
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Team billing
                </li>
                <li className="plan__list-item">
                  <Checkmark className="plan__list-icon" />
                  Priority support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
