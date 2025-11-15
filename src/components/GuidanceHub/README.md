# FebreMed Guidance Hub

A comprehensive React component that provides personalized video-based guidance and home remedies for fever care, integrated into the FebreMed AI fever helpline.

## Features

- **Personalized Video Recommendations**: AI-powered video suggestions based on fever severity, age, symptoms, and decision
- **Comprehensive Home Remedies Database**: 15+ scientifically-backed home remedies with detailed instructions
- **Intelligent Recommendation Engine**: Smart filtering and prioritization of content
- **Emergency Alerts**: Prominent emergency hotline buttons for high-severity cases
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Accessibility**: ARIA labels, alt text, and keyboard navigation support

## Component Structure

```
src/components/GuidanceHub/
├── GuidanceHub.tsx      # Main component
├── VideoCard.tsx        # Individual video display
├── RemedyCard.tsx       # Individual remedy display
├── VideoPlayer.tsx      # YouTube video player modal
├── types.ts             # TypeScript interfaces
├── index.ts             # Exports
└── README.md            # This file

src/lib/
└── videoDatabase.ts     # Video and remedy database
```

## Usage

### Basic Integration

```tsx
import { GuidanceHub } from "@/components/GuidanceHub";

<GuidanceHub
  severity="HIGH" | "MODERATE" | "LOW"
  decision="CONTINUE" | "CONSULT_DOCTOR" | "LIKELY_SAFE_TO_STOP"
  age={30}
  symptoms={["headache", "sore throat"]}
  duration={3}
  temperature={39.5} // optional
/>
```

### Integration in Results Page

The component is already integrated in `src/pages/Results.tsx`. It automatically:
- Calculates severity from temperature
- Extracts symptoms from the assessment
- Gets age and duration from assessment data
- Passes decision from AI prediction

## Video Database Setup

### ⚠️ IMPORTANT: Replace YouTube Video IDs

The current video database uses placeholder YouTube IDs. **You MUST replace these with real, verified medical professional videos.**

### Steps to Add Real Videos:

1. **Search YouTube** for medical professional videos matching each category
2. **Verify the source**: Ensure videos are from:
   - Verified medical channels (doctors, hospitals, health organizations)
   - Have 10K+ views (indicates trust)
   - Are publicly embeddable
   - Are 3-10 minutes long
   - Uploaded within last 2 years

3. **Get YouTube Video ID**: 
   - From URL: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Extract the `VIDEO_ID` part

4. **Update `src/lib/videoDatabase.ts`**:
   ```typescript
   {
     id: 'hydrate-1',
     youtubeId: 'YOUR_REAL_VIDEO_ID', // Replace this
     title: 'How to Stay Hydrated During Fever',
     // ... rest of the video data
   }
   ```

5. **Test Embedding**: Verify each video can be embedded by checking:
   - Video settings allow embedding
   - Video is not age-restricted
   - Video is publicly available

### Recommended Video Sources:

- **Mayo Clinic** (mayoclinic)
- **Cleveland Clinic** (clevelandclinic)
- **Johns Hopkins Medicine** (johnshopkinsmedicine)
- **American Academy of Pediatrics** (aap)
- **World Health Organization** (WHO)
- **Centers for Disease Control** (CDC)
- **Verified Indian Medical Channels** (for Hindi content)

## Remedy Database

The remedy database includes:

### High Fever Remedies (39°C+)
- Cool Compress
- Lukewarm Bath
- Turmeric Milk (Golden Milk)
- Ginger Tea
- Honey Lemon Water

### Moderate Fever Remedies (38-39°C)
- Tulsi (Holy Basil) Tea
- Garlic & Ginger Soup
- Cinnamon & Honey Drink
- Ajwain (Carom Seed) Water
- Lemon & Turmeric Drink

### Supportive Care
- Hydration Tracking
- Rest Protocol
- Light Diet Guidelines
- Room Temperature Management
- Light Clothing Recommendation

### Adding New Remedies

Edit `src/lib/videoDatabase.ts` and add to `REMEDY_DATABASE` array:

```typescript
{
  id: 'remedy-unique-id',
  name: 'Remedy Name',
  category: 'high' | 'moderate' | 'low' | 'supportive',
  severity: ['HIGH', 'MODERATE'], // Which severities this applies to
  ageGroups: ['adult', 'child'], // Which age groups
  icon: '🌿', // Emoji icon
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  preparation: ['Step 1', 'Step 2'],
  application: 'How to apply',
  duration: 'How long',
  frequency: 'How often',
  benefits: ['Benefit 1', 'Benefit 2'],
  scientificBasis: 'Scientific explanation',
  contraindications: ['Warning 1', 'Warning 2'],
  timing: 'When to use (optional)',
  bestFor: 'Best use case (optional)'
}
```

## Recommendation Engine

The recommendation engine filters and prioritizes content based on:

### Severity-Based Filtering
- **HIGH**: Emergency videos, cooling techniques, hydration
- **MODERATE**: Hydration, medication adherence, home care
- **LOW**: Medication completion, natural remedies, prevention

### Age-Based Filtering
- **Infant** (< 2 years): Child-specific care only
- **Child** (2-12 years): Child-safe remedies and videos
- **Adult** (13-59 years): All content
- **Elderly** (60+ years): Age-appropriate content

### Decision-Based Filtering
- **CONTINUE**: Medication adherence videos, supportive care
- **CONSULT_DOCTOR**: When to see doctor, emergency recognition
- **LIKELY_SAFE_TO_STOP**: Prevention, natural remedies

### Customization

Edit `getRecommendedVideos()` and `getRecommendedRemedies()` functions in `src/lib/videoDatabase.ts` to customize the recommendation logic.

## Styling

The component uses:
- **Primary Color**: Celestial Blue (#1B98E0) for videos
- **Success Color**: Green for remedies
- **Destructive Color**: Red for emergency alerts
- **Tailwind CSS**: All styling via utility classes

### Customization

To change colors, edit:
- `src/index.css` - CSS variables
- `tailwind.config.ts` - Tailwind theme
- Component files - Direct Tailwind classes

## Emergency Features

### Emergency Alert Display

The component automatically shows an emergency alert when:
- `severity === 'HIGH'` OR
- `decision === 'CONSULT_DOCTOR'`

### Emergency Hotlines

- **108**: General emergency (India)
- **102**: Ambulance (India)

To change hotlines, edit `GuidanceHub.tsx`:
```tsx
<a href="tel:YOUR_EMERGENCY_NUMBER">
  Call Emergency: YOUR_EMERGENCY_NUMBER
</a>
```

## Accessibility

- **ARIA Labels**: All interactive elements have proper labels
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Semantic HTML and ARIA attributes
- **Alt Text**: All images have descriptive alt text
- **Focus Indicators**: Visible focus states for keyboard users

## Performance

- **Lazy Loading**: Videos load only when clicked
- **Image Optimization**: YouTube thumbnail API for video previews
- **Code Splitting**: Component can be lazy-loaded if needed
- **Memoization**: Consider adding React.memo for large lists

## Testing

### Test Cases

1. **Severity Levels**: Test with LOW, MODERATE, HIGH
2. **Age Groups**: Test with infant, child, adult, elderly
3. **Decisions**: Test with CONTINUE, CONSULT_DOCTOR, LIKELY_SAFE_TO_STOP
4. **Video Embedding**: Verify all videos embed correctly
5. **Mobile Responsiveness**: Test on mobile, tablet, desktop
6. **Emergency Alerts**: Verify alerts show for high severity
7. **Empty States**: Test with no recommendations

### Manual Testing Checklist

- [ ] All videos embed and play correctly
- [ ] Remedy cards expand/collapse properly
- [ ] Emergency alerts display for high severity
- [ ] Mobile layout is responsive
- [ ] All links work (emergency hotlines)
- [ ] Loading states display correctly
- [ ] Empty states show when no recommendations
- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly

## Troubleshooting

### Videos Not Embedding

1. Check YouTube video ID is correct
2. Verify video allows embedding (check YouTube settings)
3. Check video is not age-restricted
4. Verify video is publicly available

### Recommendations Not Showing

1. Check severity calculation logic
2. Verify age group mapping
3. Check decision type matches database
4. Review filter logic in recommendation functions

### Styling Issues

1. Verify Tailwind CSS is configured
2. Check CSS variables in `index.css`
3. Ensure shadcn/ui components are installed
4. Check for conflicting styles

## Future Enhancements

- [ ] Video playback tracking/analytics
- [ ] User favorites/bookmarks
- [ ] Remedy preparation timer
- [ ] Multi-language support
- [ ] Video transcripts
- [ ] Remedy effectiveness tracking
- [ ] Integration with medication reminders
- [ ] Social sharing of remedies

## License

Part of FebreMed AI Fever Helpline - Microlabs Hackathon Project

## Support

For issues or questions:
1. Check this README
2. Review component code comments
3. Check video database for placeholder IDs
4. Verify all dependencies are installed

---

**Remember**: Replace all placeholder YouTube video IDs with real, verified medical professional videos before production deployment!

