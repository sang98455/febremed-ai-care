# Video Setup Instructions - Fix "Video Unavailable" Error

## Problem
Videos are showing but displaying "Video Unavailable" when clicked. This happens because the YouTube video IDs in the database are placeholders and need to be replaced with real, embeddable video IDs.

## Quick Fix Steps

### Step 1: Find Real Medical Videos on YouTube

1. Go to YouTube.com
2. Search for medical professional videos matching each category:
   - "How to stay hydrated during fever doctor"
   - "Fever cooling techniques medical professional"
   - "Child fever care pediatrician"
   - "Emergency fever symptoms doctor"
   - etc.

3. **IMPORTANT**: Verify the video:
   - ✅ Is from a verified medical channel (doctor, hospital, health org)
   - ✅ Has "Share" → "Embed" option available
   - ✅ Is publicly accessible (not private/unlisted)
   - ✅ Is 3-10 minutes long
   - ✅ Has 10K+ views (indicates trust)

### Step 2: Get the Video ID

From the YouTube URL:
```
https://www.youtube.com/watch?v=VIDEO_ID_HERE
```

Extract just the `VIDEO_ID_HERE` part (the string after `v=`)

### Step 3: Update videoDatabase.ts

Open `src/lib/videoDatabase.ts` and replace the placeholder IDs:

**Current (Placeholder):**
```typescript
hydration: {
  youtubeId: "jNQXAC9IVRw", // PLACEHOLDER
  // ...
}
```

**Replace with:**
```typescript
hydration: {
  youtubeId: "YOUR_REAL_VIDEO_ID_HERE", // Real medical video
  // ...
}
```

### Step 4: Test Each Video

1. Save the file
2. Refresh your app
3. Click on each video to verify it plays
4. If a video still shows "unavailable", try a different video ID

## Recommended Video Sources

Search YouTube for videos from these verified channels:

- **Mayo Clinic** - Search: "Mayo Clinic fever"
- **Cleveland Clinic** - Search: "Cleveland Clinic hydration"
- **Johns Hopkins Medicine** - Search: "Johns Hopkins fever"
- **American Academy of Pediatrics** - Search: "AAP child fever"
- **World Health Organization** - Search: "WHO ORS dehydration"
- **CDC** - Search: "CDC fever management"

## Quick Test Video IDs

For testing purposes, you can use these well-known embeddable videos (but replace with medical videos for production):

- `jNQXAC9IVRw` - Always embeddable (for testing only)
- `dQw4w9WgXcQ` - Always embeddable (for testing only)

**⚠️ These are NOT medical videos - use only for testing the embed functionality!**

## All Video IDs to Replace

In `src/lib/videoDatabase.ts`, replace these 20 video IDs:

1. `hydration` - Line ~63
2. `hydration_signs` - Line ~76
3. `ors_solution` - Line ~89
4. `fever_cooling` - Line ~103
5. `cold_compress` - Line ~116
6. `lukewarm_bath` - Line ~129
7. `child_fever_care` - Line ~143
8. `child_fever_myths` - Line ~156
9. `child_dosing` - Line ~169
10. `complete_course` - Line ~183
11. `antibiotic_resistance` - Line ~196
12. `medicine_timing` - Line ~209
13. `red_flags` - Line ~223
14. `high_fever_danger` - Line ~236
15. `when_go_hospital` - Line ~249
16. `turmeric_milk` - Line ~263
17. `ginger_tea` - Line ~276
18. `honey_lemon` - Line ~289
19. `fever_myths` - Line ~316
20. `rest_recovery` - Line ~329

## Verification Checklist

After replacing video IDs:

- [ ] All 20 video IDs replaced
- [ ] Each video plays when clicked
- [ ] No "Video Unavailable" errors
- [ ] Videos are from medical professionals
- [ ] Videos are relevant to their categories
- [ ] All videos are embeddable

## Need Help?

If you're still having issues:

1. Check browser console for errors (F12)
2. Verify video ID format (11 characters, no special characters)
3. Test video URL directly: `https://www.youtube.com/watch?v=VIDEO_ID`
4. Check if video has embedding disabled (try Share → Embed on YouTube)

---

**Remember**: Replace ALL placeholder video IDs with real medical professional videos before your hackathon presentation!

