import React from 'react';

const BorderCollieAvatar = () => {
  // 内联样式定义
  const styles = {
    borderCollie: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 20px)',
      gap: '1px',
    },
    pixel: (color) => ({
      width: '20px',
      height: '20px',
      backgroundColor: color,
    }),
  };

  return (
    <div style={styles.borderCollie}>
      {/* 示例像素，根据实际图案添加更多 */}
      <div style={styles.pixel('#8B4513')}></div>
      <div style={styles.pixel('#8B4513')}></div>
      <div style={styles.pixel('#FFFFFF')}></div>
      <div style={styles.pixel('#FFFFFF')}></div>
      <div style={styles.pixel('#FFFFFF')}></div>
      <div style={styles.pixel('#FFFFFF')}></div>
      <div style={styles.pixel('#8B4513')}></div>
      <div style={styles.pixel('#8B4513')}></div>
      {/* 根据实际图案继续添加像素 */}
    </div>
  );
};

export default BorderCollieAvatar;
