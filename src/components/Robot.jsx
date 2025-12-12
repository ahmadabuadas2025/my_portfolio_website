import { motion } from 'framer-motion'

const Robot = ({ phase, onAnimationComplete }) => {
  return (
    <motion.div
      className="absolute z-50 pointer-events-none"
      style={{ 
        top: '5%',
        transform: 'translateX(-50%)',
      }}
      initial={{ left: '-15%', opacity: 0 }}
      animate={
        phase === 'walking'
          ? { 
              left: '50%', 
              opacity: 1,
              y: [0, -6, 0],
            }
          : phase === 'smiling' || phase === 'sayingHello'
          ? { 
              left: '50%', 
              opacity: 1,
              y: [0, -8, 0],
              scale: 1,
            }
          : { 
              left: '50%', 
              opacity: 0,
              scale: 0,
            }
      }
      transition={{
        duration: phase === 'walking' ? 5 : phase === 'smiling' ? 0 : phase === 'sayingHello' ? 0 : 0.5,
        ease: phase === 'walking' ? 'linear' : 'easeInOut',
        y: {
          duration: 0.8,
          repeat: phase === 'walking' ? Infinity : 0,
          repeatType: 'reverse',
        },
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Robot SVG */}
      <svg
        width="60"
        height="75"
        viewBox="0 0 80 100"
        className="drop-shadow-2xl"
      >
        {/* Head */}
        <rect
          x="20"
          y="5"
          width="40"
          height="35"
          rx="5"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="2"
        />
        
        {/* Eyes */}
        <circle cx="30" cy="20" r="6" fill="white" />
        <circle cx="50" cy="20" r="6" fill="white" />
        {phase === 'smiling' || phase === 'sayingHello' ? (
          <>
            {/* Smiling eyes (curved lines) */}
            <motion.path
              d="M 25 20 Q 30 15 35 20"
              stroke="black"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M 45 20 Q 50 15 55 20"
              stroke="black"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Smile mouth */}
            <motion.path
              d="M 28 28 Q 40 35 52 28"
              stroke="black"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </>
        ) : (
          <>
            <circle cx="30" cy="20" r="3" fill="black" />
            <circle cx="50" cy="20" r="3" fill="black" />
          </>
        )}
        
        {/* Antenna */}
        <line x1="40" y1="5" x2="40" y2="0" stroke="#6B7280" strokeWidth="2" />
        <circle cx="40" cy="0" r="3" fill="#3B82F6" />
        
        {/* Body */}
        <rect
          x="15"
          y="40"
          width="50"
          height="45"
          rx="5"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="2"
        />
        
        {/* Screen with waveform */}
        <rect
          x="22"
          y="48"
          width="36"
          height="20"
          rx="3"
          fill="#BFDBFE"
        />
        {/* Waveform lines */}
        <motion.path
          d="M 25 58 L 28 55 L 31 60 L 34 53 L 37 58 L 40 55 L 43 60 L 46 53 L 49 58 L 52 55 L 55 60"
          stroke="white"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 25 58 L 28 55 L 31 60 L 34 53 L 37 58 L 40 55 L 43 60 L 46 53 L 49 58 L 52 55 L 55 60",
              "M 25 58 L 28 60 L 31 55 L 34 62 L 37 56 L 40 60 L 43 55 L 46 62 L 49 56 L 52 60 L 55 55",
              "M 25 58 L 28 55 L 31 60 L 34 53 L 37 58 L 40 55 L 43 60 L 46 53 L 49 58 L 52 55 L 55 60",
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Red buttons */}
        <circle cx="30" cy="75" r="3" fill="#EF4444" />
        <circle cx="50" cy="75" r="3" fill="#EF4444" />
        
        {/* Left Arm */}
        <rect
          x="5"
          y="50"
          width="12"
          height="8"
          rx="4"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="2"
        />
        <rect
          x="2"
          y="55"
          width="6"
          height="4"
          rx="2"
          fill="#6B7280"
        />
        
        {/* Right Arm */}
        <rect
          x="63"
          y="50"
          width="12"
          height="8"
          rx="4"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="2"
        />
        <rect
          x="72"
          y="55"
          width="6"
          height="4"
          rx="2"
          fill="#6B7280"
        />
        
        {/* Left Leg */}
        <rect
          x="20"
          y="85"
          width="12"
          height="15"
          rx="6"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="98"
          width="16"
          height="2"
          rx="1"
          fill="#6B7280"
        />
        
        {/* Right Leg */}
        <rect
          x="48"
          y="85"
          width="12"
          height="15"
          rx="6"
          fill="#9CA3AF"
          stroke="#6B7280"
          strokeWidth="2"
        />
        <rect
          x="46"
          y="98"
          width="16"
          height="2"
          rx="1"
          fill="#6B7280"
        />
      </svg>
    </motion.div>
  )
}

export default Robot

