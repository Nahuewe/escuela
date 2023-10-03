import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";

const Textinput = ({
  type,
  label,
  placeholder = "Add placeholder",
  classLabel = "form-label",
  className = "",
  classGroup = "",
  register,
  name,
  readonly,
  value,
  error,
  icon,
  disabled,
  id,
  horizontal,
  validate,
  isMask,
  msgTooltip,
  description,
  hasicon,
  onChange,
  options,
  onFocus,
  defaultValue,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordInput = type === "password";

  return (
    <div
      className={`fromGroup  ${error ? "has-error" : ""}  ${horizontal ? "flex" : ""
        }  ${validate ? "is-valid" : ""} `}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel}  ${horizontal ? "flex-0 mr-6 md:w-[100px] w-[60px] break-words" : ""
            }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        {name && !isMask && (
          <input
            type={isPasswordInput && !showPassword ? "password" : "text"}
            {...register(name)}
            {...rest}
            className={`${error ? " has-error" : " "
              } form-control py-2 ${className}  `}
            placeholder={placeholder}
            readOnly={readonly}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            onChange={onChange}
          />
        )}
        {!name && !isMask && (
          <input
            type={isPasswordInput && !showPassword ? "password" : "text"}
            className={`form-control py-2 ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChange}
            id={id}
          />
        )}
        {name && isMask && (
          <Cleave
            {...register(name)}
            {...rest}
            placeholder={placeholder}
            options={options}
            className={`${error ? " has-error" : " "
              } form-control py-2 ${className}  `}
            onFocus={onFocus}
            id={id}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {!name && isMask && (
          <Cleave
            placeholder={placeholder}
            options={options}
            className={`${error ? " has-error" : " "
              } form-control py-2 ${className}  `}
            onFocus={onFocus}
            id={id}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        {/* icon */}
        <div className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse">
          {hasicon && (
            <span
              className="cursor-pointer text-secondary-500"
              onClick={handleTogglePassword}
            >
              {isPasswordInput && showPassword ? (
                <Icon icon="heroicons-outline:eye-slash" />
              ) : (
                <Icon icon="heroicons-outline:eye" />
              )}
            </span>
          )}

          {error && (
            <span className="text-danger-500">
              <Icon icon="heroicons-outline:information-circle" />
            </span>
          )}
          {validate && (
            <span className="text-success-500">
              <Icon icon="bi:check-lg" />
            </span>
          )}
        </div>
      </div>
      {/* error and success message*/}
      {error && (
        <div
          className={` mt-2 ${msgTooltip
              ? " inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded"
              : " text-danger-500 block text-sm"
            }`}
        >
          {error.message}
        </div>
      )}
      {/* validated and success message*/}
      {validate && (
        <div
          className={` mt-2 ${msgTooltip
              ? " inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded"
              : " text-success-500 block text-sm"
            }`}
        >
          {validate}
        </div>
      )}
      {description && <span className="input-description">{description}</span>}

      {isPasswordInput && (
        <div className="mt-2">
          <input
            type="checkbox"
            id={`show-password-checkbox-${id}`}
            checked={showPassword}
            onChange={handleTogglePassword}
          />
          <label htmlFor={`show-password-checkbox-${id}`} className="ml-2">
            Mostrar contraseña
          </label>
        </div>
      )}
    </div>
  );
};

export default Textinput;
