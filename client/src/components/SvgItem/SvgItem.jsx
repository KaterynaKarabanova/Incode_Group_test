import sprite from "../../images/symbol-defs.svg";

const SvgItem = ({ address, width, height, color }) => {
  return (
    <svg width={width || 20} height={height || 20}>
      <use
        style={{
          fill: color || "none",
        }}
        href={`${sprite}#icon-${address}`}
      />
    </svg>
  );
};
export default SvgItem;
