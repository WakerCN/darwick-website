/*
 * @Author       : 魏威
 * @Date         : 2025-06-09 13:44
 * @LastEditTime : 2025-06-09 14:14
 * @LastEditors  : StarOne
 * @Description  :
 */

export interface Comment {
  ShipName: string;
  TechnicianName: string;
  Review: string;
  Rating: number;
  StarRating: number;
}

export const commentList: Comment[] = [
  {
    ShipName: 'GENJI',
    TechnicianName: 'Mann',
    Review:
      'The repair process was efficient, and the skills were top-notch. The issue was resolved very quickly.',
    Rating: 100,
    StarRating: 5
  },
  {
    ShipName: 'THE GURARDIAN',
    TechnicianName: 'Raj kumar',
    Review:
      'Excellent service attitude, thorough inspection, and very satisfactory repair results.',
    Rating: 95,
    StarRating: 5
  },
  {
    ShipName: 'GENCO VIGILAND',
    TechnicianName: 'KC',
    Review:
      'The repair team is very professional, and the problem was thoroughly resolved. Highly trusted.',
    Rating: 97,
    StarRating: 5
  },
  {
    ShipName: 'JAY PRIYA',
    TechnicianName: 'Sanat',
    Review:
      'The repair took a bit longer, but the technician was very patient, and the quality of the repair was excellent.',
    Rating: 94,
    StarRating: 5
  },
  {
    ShipName: 'MAERSK VIRGINIA',
    TechnicianName: 'Liu Hai',
    Review:
      'Service was excellent, and the repair was completed quickly. The equipment is back to normal, completely satisfied.',
    Rating: 95,
    StarRating: 5
  },
  {
    ShipName: 'GRACIOUS ACE',
    TechnicianName: 'Chen Hao',
    Review:
      'The staff were very professional, and the repair was precise. High-quality service.',
    Rating: 98,
    StarRating: 5
  },
  {
    ShipName: 'LOYALTY HONG',
    TechnicianName: 'Yang Fan',
    Review:
      'The repair was timely, and the results were obvious. The vessel returned to its optimal operating condition.',
    Rating: 93,
    StarRating: 5
  },
  {
    ShipName: 'MV MINOAS',
    TechnicianName: 'Sun Xiaoli',
    Review:
      'The technician was very experienced, and the whole repair process went smoothly.',
    Rating: 95,
    StarRating: 5
  },
  {
    ShipName: 'ORIS',
    TechnicianName: 'Wang Peng',
    Review:
      'Very professional, fast service, and the equipment is as good as new.',
    Rating: 96,
    StarRating: 5
  },
  {
    ShipName: 'BERGAMOT ACE',
    TechnicianName: 'Huang Kai',
    Review:
      'The repair quality was good, the efficiency was high, and the equipment has been restored well.',
    Rating: 94,
    StarRating: 5
  }
];
